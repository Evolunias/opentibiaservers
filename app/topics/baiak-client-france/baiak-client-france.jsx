import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-france');
}

export default function BaiakClientFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-france" />;
}
