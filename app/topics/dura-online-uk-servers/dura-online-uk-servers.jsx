import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-uk-servers');
}

export default function DuraOnlineUkServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-uk-servers" />;
}
