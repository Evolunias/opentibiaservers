import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-poland');
}

export default function SerenityBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-poland" />;
}
