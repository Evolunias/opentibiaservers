import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-argentina');
}

export default function SerenityRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-argentina" />;
}
