import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-mexico');
}

export default function ClassickDrakoriaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-mexico" />;
}
