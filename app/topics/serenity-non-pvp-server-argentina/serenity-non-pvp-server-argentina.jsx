import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-argentina');
}

export default function SerenityNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-argentina" />;
}
