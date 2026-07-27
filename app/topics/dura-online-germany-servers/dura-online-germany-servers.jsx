import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-germany-servers');
}

export default function DuraOnlineGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-germany-servers" />;
}
