import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-website');
}

export default function InfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-website" />;
}
