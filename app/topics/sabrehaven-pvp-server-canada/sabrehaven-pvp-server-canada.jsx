import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-canada');
}

export default function SabrehavenPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-canada" />;
}
