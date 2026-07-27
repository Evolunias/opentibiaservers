import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-europe-server');
}

export default function SerenityEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-europe-server" />;
}
