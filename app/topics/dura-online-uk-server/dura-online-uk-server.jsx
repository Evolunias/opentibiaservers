import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-uk-server');
}

export default function DuraOnlineUkServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-uk-server" />;
}
