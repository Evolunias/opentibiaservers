import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-brazil');
}

export default function SerenityRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-brazil" />;
}
