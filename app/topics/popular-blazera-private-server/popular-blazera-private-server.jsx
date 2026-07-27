import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-private-server');
}

export default function PopularBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-private-server" />;
}
