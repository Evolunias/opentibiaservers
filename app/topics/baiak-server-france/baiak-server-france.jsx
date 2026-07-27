import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-france');
}

export default function BaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-france" />;
}
