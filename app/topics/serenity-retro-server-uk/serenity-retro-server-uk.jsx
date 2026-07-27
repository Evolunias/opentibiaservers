import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-uk');
}

export default function SerenityRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-uk" />;
}
