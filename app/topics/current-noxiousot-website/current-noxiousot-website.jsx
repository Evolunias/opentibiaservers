import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-website');
}

export default function CurrentNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-website" />;
}
