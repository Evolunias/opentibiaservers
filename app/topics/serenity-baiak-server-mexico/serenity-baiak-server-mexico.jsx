import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-mexico');
}

export default function SerenityBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-mexico" />;
}
