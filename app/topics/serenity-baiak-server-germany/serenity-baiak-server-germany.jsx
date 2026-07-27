import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-germany');
}

export default function SerenityBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-germany" />;
}
