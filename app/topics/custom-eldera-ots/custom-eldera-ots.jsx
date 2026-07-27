import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-ots');
}

export default function CustomElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-ots" />;
}
