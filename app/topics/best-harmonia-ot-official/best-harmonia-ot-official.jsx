import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-official');
}

export default function BestHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-official" />;
}
