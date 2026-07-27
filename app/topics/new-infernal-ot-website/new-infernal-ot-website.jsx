import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-website');
}

export default function NewInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-website" />;
}
