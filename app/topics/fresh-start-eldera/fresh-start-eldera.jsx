import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera');
}

export default function FreshStartElderaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera" />;
}
