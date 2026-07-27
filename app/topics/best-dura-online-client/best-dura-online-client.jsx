import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-client');
}

export default function BestDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-client" />;
}
