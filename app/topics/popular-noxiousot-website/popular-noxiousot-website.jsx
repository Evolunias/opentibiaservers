import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-website');
}

export default function PopularNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-website" />;
}
