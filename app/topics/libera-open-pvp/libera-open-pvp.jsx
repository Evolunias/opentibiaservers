import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-open-pvp');
}

export default function LiberaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="libera-open-pvp" />;
}
