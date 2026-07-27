import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-low-exp-server');
}

export default function ClassickDrakoria13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-low-exp-server" />;
}
