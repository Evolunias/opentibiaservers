import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-brazil');
}

export default function DuraOnlinePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-brazil" />;
}
