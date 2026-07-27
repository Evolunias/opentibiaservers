import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-website');
}

export default function NoResetHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-website" />;
}
