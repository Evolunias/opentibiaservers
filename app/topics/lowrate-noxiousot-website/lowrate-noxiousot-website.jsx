import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-website');
}

export default function LowrateNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-website" />;
}
