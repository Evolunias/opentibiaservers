import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-mexico-server');
}

export default function SerenityMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-mexico-server" />;
}
