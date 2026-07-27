import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-canada-servers');
}

export default function OxygenotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-canada-servers" />;
}
