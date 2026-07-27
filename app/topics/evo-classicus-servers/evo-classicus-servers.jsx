import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-classicus-servers');
}

export default function EvoClassicusServersKeywordPage() {
  return <StaticKeywordPage slug="evo-classicus-servers" />;
}
