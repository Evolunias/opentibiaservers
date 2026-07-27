import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-usa');
}

export default function OtServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-usa" />;
}
