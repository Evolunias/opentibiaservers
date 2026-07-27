import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-official');
}

export default function TopZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-official" />;
}
