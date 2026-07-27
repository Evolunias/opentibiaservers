import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-website');
}

export default function ActiveInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-website" />;
}
