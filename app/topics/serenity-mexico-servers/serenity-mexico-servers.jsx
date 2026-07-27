import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-mexico-servers');
}

export default function SerenityMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-mexico-servers" />;
}
