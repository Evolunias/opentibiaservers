import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-france');
}

export default function SabrehavenPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-france" />;
}
