import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-argentina');
}

export default function BaiakOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-argentina" />;
}
