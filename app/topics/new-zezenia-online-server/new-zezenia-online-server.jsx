import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-server');
}

export default function NewZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-server" />;
}
