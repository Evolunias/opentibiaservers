import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-sweden-servers');
}

export default function DuraOnlineSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-sweden-servers" />;
}
