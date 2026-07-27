import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-status');
}

export default function DuraOnlineStatusKeywordPage() {
  return <StaticKeywordPage slug="dura-online-status" />;
}
