import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp');
}

export default function ClassickDrakoriaPvpKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp" />;
}
