import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-create-account');
}

export default function RealMapElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-create-account" />;
}
