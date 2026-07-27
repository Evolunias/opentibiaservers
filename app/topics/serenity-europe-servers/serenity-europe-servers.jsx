import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-europe-servers');
}

export default function SerenityEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-europe-servers" />;
}
