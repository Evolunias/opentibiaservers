import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-official');
}

export default function ActiveZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-official" />;
}
