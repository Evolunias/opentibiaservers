import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-brazil');
}

export default function SerenityBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-brazil" />;
}
