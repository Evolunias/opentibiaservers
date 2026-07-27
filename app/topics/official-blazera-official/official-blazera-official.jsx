import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-official');
}

export default function OfficialBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-official" />;
}
