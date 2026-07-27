import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-ots');
}

export default function CurrentElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-ots" />;
}
