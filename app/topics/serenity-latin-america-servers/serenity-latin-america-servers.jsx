import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-latin-america-servers');
}

export default function SerenityLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-latin-america-servers" />;
}
