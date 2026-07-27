import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-mexico');
}

export default function SabrehavenPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-mexico" />;
}
