import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-ots');
}

export default function OfficialBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-ots" />;
}
