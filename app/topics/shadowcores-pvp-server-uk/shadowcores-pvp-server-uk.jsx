import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-uk');
}

export default function ShadowcoresPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-uk" />;
}
