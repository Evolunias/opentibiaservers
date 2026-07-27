import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-official');
}

export default function ActiveHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-official" />;
}
