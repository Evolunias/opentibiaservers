import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-usa');
}

export default function SabrehavenPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-usa" />;
}
