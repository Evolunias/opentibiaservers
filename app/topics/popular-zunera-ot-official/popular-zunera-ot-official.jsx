import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-official');
}

export default function PopularZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-official" />;
}
