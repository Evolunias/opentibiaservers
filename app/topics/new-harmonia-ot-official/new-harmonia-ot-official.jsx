import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-official');
}

export default function NewHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-official" />;
}
