import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-saintsot-server');
}

export default function BaiakSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-saintsot-server" />;
}
