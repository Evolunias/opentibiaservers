import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-ots');
}

export default function OfficialCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="official-canob-ots" />;
}
