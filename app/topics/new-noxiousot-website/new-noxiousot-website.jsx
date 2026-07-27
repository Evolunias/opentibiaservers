import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-website');
}

export default function NewNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-website" />;
}
