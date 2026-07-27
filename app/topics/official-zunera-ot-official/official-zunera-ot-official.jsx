import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-official');
}

export default function OfficialZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-official" />;
}
