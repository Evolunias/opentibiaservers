import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-poland');
}

export default function SerenityRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-poland" />;
}
