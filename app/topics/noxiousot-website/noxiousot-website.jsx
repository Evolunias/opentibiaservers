import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-website');
}

export default function NoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-website" />;
}
