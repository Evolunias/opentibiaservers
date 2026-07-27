import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-reset');
}

export default function DuraOnlineResetKeywordPage() {
  return <StaticKeywordPage slug="dura-online-reset" />;
}
