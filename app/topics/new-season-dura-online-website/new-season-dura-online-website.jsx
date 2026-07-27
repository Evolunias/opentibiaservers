import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-website');
}

export default function NewSeasonDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-website" />;
}
