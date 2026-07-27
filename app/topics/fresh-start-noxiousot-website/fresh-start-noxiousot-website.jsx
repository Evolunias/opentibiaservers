import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-website');
}

export default function FreshStartNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-website" />;
}
