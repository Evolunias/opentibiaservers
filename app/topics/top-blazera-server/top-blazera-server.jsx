import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-server');
}

export default function TopBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-server" />;
}
