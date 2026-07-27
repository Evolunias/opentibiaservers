import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera');
}

export default function LowrateOlderaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera" />;
}
