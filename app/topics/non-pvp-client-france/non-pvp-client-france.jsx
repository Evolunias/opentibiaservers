import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-france');
}

export default function NonPvpClientFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-france" />;
}
