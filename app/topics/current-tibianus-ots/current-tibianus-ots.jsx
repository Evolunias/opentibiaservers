import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-ots');
}

export default function CurrentTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-ots" />;
}
