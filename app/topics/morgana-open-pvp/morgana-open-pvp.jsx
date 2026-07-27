import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-open-pvp');
}

export default function MorganaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="morgana-open-pvp" />;
}
