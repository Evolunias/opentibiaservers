import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-north-america');
}

export default function SabrehavenPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-north-america" />;
}
