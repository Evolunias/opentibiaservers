import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-server');
}

export default function CustomThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-server" />;
}
