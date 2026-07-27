import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-server');
}

export default function ActiveBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-server" />;
}
