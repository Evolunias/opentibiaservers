import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-mexico');
}

export default function BaiakOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-mexico" />;
}
