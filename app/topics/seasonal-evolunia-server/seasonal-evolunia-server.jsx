import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-evolunia-server');
}

export default function SeasonalEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-evolunia-server" />;
}
