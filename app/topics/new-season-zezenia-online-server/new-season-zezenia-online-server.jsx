import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-server');
}

export default function NewSeasonZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-server" />;
}
