import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-classicus-server');
}

export default function EvoClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="evo-classicus-server" />;
}
