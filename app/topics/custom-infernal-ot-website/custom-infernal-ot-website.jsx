import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-website');
}

export default function CustomInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-website" />;
}
