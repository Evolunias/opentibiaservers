import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-official');
}

export default function HarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-official" />;
}
