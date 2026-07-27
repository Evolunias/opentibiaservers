import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-client');
}

export default function PopularElderaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-client" />;
}
