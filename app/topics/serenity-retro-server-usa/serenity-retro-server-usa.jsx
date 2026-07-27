import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-usa');
}

export default function SerenityRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-usa" />;
}
