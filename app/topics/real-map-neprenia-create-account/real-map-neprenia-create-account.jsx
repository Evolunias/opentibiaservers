import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-create-account');
}

export default function RealMapNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-create-account" />;
}
