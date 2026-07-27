import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-latin-america-server');
}

export default function DuraOnlineLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-latin-america-server" />;
}
