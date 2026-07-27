import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-europe');
}

export default function SerenityBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-europe" />;
}
