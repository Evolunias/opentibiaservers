import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-official');
}

export default function BestZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-official" />;
}
