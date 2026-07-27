import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-low-exp-server');
}

export default function ClassickDrakoria80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-low-exp-server" />;
}
