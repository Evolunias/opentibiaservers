import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-europe');
}

export default function SabrehavenEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-europe" />;
}
