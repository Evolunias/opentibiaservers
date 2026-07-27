import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-ot');
}

export default function CanobOtKeywordPage() {
  return <StaticKeywordPage slug="canob-ot" />;
}
