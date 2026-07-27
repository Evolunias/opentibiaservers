import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-open-pvp');
}

export default function AnticaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="antica-open-pvp" />;
}
