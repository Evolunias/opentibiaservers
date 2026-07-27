import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-website');
}

export default function NewZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-website" />;
}
