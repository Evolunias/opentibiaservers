import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-sweden');
}

export default function DuraOnlineRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-sweden" />;
}
