import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-website');
}

export default function BestNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-website" />;
}
