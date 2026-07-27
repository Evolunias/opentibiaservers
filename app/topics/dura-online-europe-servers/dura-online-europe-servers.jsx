import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-europe-servers');
}

export default function DuraOnlineEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-europe-servers" />;
}
