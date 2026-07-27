import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera');
}

export default function PopularElderaKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera" />;
}
