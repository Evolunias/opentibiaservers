import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-official');
}

export default function NewZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-official" />;
}
