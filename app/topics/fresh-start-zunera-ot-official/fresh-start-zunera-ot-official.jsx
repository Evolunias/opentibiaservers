import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-official');
}

export default function FreshStartZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-official" />;
}
