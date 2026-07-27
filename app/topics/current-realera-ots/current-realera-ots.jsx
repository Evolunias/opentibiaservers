import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-ots');
}

export default function CurrentRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-realera-ots" />;
}
