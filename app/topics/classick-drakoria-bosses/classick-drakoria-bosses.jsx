import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-bosses');
}

export default function ClassickDrakoriaBossesKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-bosses" />;
}
