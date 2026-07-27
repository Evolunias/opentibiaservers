import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-open-pvp');
}

export default function UniteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="unitera-open-pvp" />;
}
