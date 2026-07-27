import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-low-exp-server');
}

export default function ClassickDrakoria854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-low-exp-server" />;
}
