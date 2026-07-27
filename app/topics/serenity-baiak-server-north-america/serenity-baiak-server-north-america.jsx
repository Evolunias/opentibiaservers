import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-north-america');
}

export default function SerenityBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-north-america" />;
}
