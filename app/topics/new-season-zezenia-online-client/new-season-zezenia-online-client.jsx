import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-client');
}

export default function NewSeasonZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-client" />;
}
