import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-latin-america');
}

export default function SabrehavenPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-latin-america" />;
}
