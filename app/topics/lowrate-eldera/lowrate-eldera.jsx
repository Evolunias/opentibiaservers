import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera');
}

export default function LowrateElderaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera" />;
}
