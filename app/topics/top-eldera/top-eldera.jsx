import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera');
}

export default function TopElderaKeywordPage() {
  return <StaticKeywordPage slug="top-eldera" />;
}
