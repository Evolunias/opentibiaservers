import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp');
}

export default function ShadowcoresPvpKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp" />;
}
