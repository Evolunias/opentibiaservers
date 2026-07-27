import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-france');
}

export default function SabrehavenNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-france" />;
}
