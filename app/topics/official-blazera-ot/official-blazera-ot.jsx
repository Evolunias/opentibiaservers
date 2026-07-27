import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-ot');
}

export default function OfficialBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-ot" />;
}
