import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-ot');
}

export default function CurrentElderaOtKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-ot" />;
}
