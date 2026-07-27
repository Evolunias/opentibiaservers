import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-official');
}

export default function TopHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-official" />;
}
