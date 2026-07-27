import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-open-pvp');
}

export default function DanubiaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="danubia-open-pvp" />;
}
