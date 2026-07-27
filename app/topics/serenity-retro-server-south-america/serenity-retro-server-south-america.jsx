import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-south-america');
}

export default function SerenityRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-south-america" />;
}
