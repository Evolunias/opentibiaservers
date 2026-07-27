import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-mexico');
}

export default function SerenityRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-mexico" />;
}
