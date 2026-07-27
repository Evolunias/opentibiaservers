import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-server');
}

export default function ForteraServerKeywordPage() {
  return <StaticKeywordPage slug="fortera-server" />;
}
