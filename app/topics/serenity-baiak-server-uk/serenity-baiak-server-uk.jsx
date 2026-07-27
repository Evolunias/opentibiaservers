import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-uk');
}

export default function SerenityBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-uk" />;
}
