import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-client');
}

export default function NewSeasonDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-client" />;
}
