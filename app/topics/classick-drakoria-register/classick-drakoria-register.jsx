import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-register');
}

export default function ClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-register" />;
}
