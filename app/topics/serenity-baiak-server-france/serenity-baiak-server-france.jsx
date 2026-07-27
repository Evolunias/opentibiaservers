import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-france');
}

export default function SerenityBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-france" />;
}
