import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-ot');
}

export default function ActiveCanobOtKeywordPage() {
  return <StaticKeywordPage slug="active-canob-ot" />;
}
