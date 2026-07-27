import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-server');
}

export default function FreshStartZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-server" />;
}
