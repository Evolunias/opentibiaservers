import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-france-server');
}

export default function AureraGlobalFranceServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-france-server" />;
}
