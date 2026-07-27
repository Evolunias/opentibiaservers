import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-france');
}

export default function BaiakServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-france" />;
}
