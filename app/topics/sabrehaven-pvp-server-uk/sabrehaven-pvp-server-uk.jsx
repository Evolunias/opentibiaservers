import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-uk');
}

export default function SabrehavenPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-uk" />;
}
