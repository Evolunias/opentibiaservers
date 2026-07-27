import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-register');
}

export default function NewSeasonHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-register" />;
}
