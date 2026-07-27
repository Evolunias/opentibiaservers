import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-website');
}

export default function NewTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-website" />;
}
