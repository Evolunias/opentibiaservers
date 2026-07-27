import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list');
}

export default function OtServerListKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list" />;
}
