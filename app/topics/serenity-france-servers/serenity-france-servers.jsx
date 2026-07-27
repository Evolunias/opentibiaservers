import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-france-servers');
}

export default function SerenityFranceServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-france-servers" />;
}
