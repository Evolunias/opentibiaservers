import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-open-pvp');
}

export default function CelestaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="celesta-open-pvp" />;
}
