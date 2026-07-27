import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-server');
}

export default function PopularImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-server" />;
}
