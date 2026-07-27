import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-north-america-server');
}

export default function SerenityNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-north-america-server" />;
}
