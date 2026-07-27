import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-official');
}

export default function CustomHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-official" />;
}
