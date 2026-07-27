import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-north-america-servers');
}

export default function SerenityNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-north-america-servers" />;
}
