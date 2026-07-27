import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-ots');
}

export default function CustomCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-ots" />;
}
