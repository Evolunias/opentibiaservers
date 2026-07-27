import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-register');
}

export default function ClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="classicus-register" />;
}
