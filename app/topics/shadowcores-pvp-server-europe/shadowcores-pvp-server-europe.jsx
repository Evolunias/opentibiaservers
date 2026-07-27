import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-europe');
}

export default function ShadowcoresPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-europe" />;
}
