import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-europe-server');
}

export default function DuraOnlineEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-europe-server" />;
}
