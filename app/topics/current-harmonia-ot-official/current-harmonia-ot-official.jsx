import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-official');
}

export default function CurrentHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-official" />;
}
