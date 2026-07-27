import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-latin-america-server');
}

export default function SerenityLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-latin-america-server" />;
}
