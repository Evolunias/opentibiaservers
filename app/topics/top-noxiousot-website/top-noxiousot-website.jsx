import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-website');
}

export default function TopNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-website" />;
}
