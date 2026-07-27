import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-sweden-server');
}

export default function DuraOnlineSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-sweden-server" />;
}
