import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-website');
}

export default function ActiveNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-website" />;
}
