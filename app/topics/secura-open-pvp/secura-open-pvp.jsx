import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-open-pvp');
}

export default function SecuraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="secura-open-pvp" />;
}
