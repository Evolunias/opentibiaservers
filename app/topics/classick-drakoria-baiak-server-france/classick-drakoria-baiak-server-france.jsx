import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-france');
}

export default function ClassickDrakoriaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-france" />;
}
