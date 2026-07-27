import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-server');
}

export default function ActiveThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-server" />;
}
