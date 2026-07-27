import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-imperianic-servers');
}

export default function EvoImperianicServersKeywordPage() {
  return <StaticKeywordPage slug="evo-imperianic-servers" />;
}
