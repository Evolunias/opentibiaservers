import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-france');
}

export default function BaiakWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-france" />;
}
