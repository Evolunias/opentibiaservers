import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera');
}

export default function CustomElderaKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera" />;
}
