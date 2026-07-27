import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-france-servers');
}

export default function AureraGlobalFranceServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-france-servers" />;
}
