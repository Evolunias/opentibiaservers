import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-register');
}

export default function BestClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-register" />;
}
