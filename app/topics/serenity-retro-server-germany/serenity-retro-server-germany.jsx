import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-germany');
}

export default function SerenityRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-germany" />;
}
