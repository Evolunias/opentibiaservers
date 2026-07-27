import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera');
}

export default function CurrentElderaKeywordPage() {
  return <StaticKeywordPage slug="current-eldera" />;
}
