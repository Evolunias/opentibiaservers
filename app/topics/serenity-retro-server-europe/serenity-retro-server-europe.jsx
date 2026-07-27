import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-europe');
}

export default function SerenityRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-europe" />;
}
