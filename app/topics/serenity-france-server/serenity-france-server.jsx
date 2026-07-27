import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-france-server');
}

export default function SerenityFranceServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-france-server" />;
}
