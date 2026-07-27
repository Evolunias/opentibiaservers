import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-ot');
}

export default function OfficialZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-ot" />;
}
