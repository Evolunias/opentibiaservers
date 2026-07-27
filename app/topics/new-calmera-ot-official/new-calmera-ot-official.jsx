import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-official');
}

export default function NewCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-official" />;
}
