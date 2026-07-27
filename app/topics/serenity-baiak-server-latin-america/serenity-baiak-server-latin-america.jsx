import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-latin-america');
}

export default function SerenityBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-latin-america" />;
}
