import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-official');
}

export default function CustomZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-official" />;
}
