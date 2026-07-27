import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-sweden');
}

export default function SabrehavenEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-sweden" />;
}
