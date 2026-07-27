import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-ots');
}

export default function ActiveCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="active-canob-ots" />;
}
