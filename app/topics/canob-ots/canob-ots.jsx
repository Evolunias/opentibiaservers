import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-ots');
}

export default function CanobOtsKeywordPage() {
  return <StaticKeywordPage slug="canob-ots" />;
}
