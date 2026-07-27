import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-official');
}

export default function FreshStartHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-official" />;
}
