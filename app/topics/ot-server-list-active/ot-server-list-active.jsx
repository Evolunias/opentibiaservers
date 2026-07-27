import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-active');
}

export default function OtServerListActiveKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-active" />;
}
