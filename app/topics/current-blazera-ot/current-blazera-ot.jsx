import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-ot');
}

export default function CurrentBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-ot" />;
}
