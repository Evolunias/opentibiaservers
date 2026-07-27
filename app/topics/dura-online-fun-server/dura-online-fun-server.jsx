import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fun-server');
}

export default function DuraOnlineFunServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fun-server" />;
}
