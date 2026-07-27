import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-server');
}

export default function PopularElderaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-server" />;
}
