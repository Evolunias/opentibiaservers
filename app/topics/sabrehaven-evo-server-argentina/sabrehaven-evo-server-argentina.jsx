import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-argentina');
}

export default function SabrehavenEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-argentina" />;
}
