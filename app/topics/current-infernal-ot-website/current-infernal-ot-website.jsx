import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-website');
}

export default function CurrentInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-website" />;
}
