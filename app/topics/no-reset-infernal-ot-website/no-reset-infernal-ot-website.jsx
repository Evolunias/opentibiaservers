import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-website');
}

export default function NoResetInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-website" />;
}
