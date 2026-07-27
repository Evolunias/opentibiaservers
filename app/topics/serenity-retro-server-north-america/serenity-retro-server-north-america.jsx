import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-north-america');
}

export default function SerenityRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-north-america" />;
}
