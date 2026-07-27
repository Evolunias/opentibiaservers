import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-ot');
}

export default function LowrateBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-ot" />;
}
