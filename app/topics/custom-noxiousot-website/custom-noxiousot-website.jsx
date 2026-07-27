import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-website');
}

export default function CustomNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-website" />;
}
