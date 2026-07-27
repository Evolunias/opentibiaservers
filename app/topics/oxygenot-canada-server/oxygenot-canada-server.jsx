import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-canada-server');
}

export default function OxygenotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-canada-server" />;
}
