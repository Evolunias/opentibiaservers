import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-argentina');
}

export default function SerenityBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-argentina" />;
}
