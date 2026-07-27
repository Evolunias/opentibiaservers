import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-list');
}

export default function OtServerListListKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-list" />;
}
