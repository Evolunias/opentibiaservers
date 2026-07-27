import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-ot');
}

export default function OfficialCanobOtKeywordPage() {
  return <StaticKeywordPage slug="official-canob-ot" />;
}
