import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-register');
}

export default function TopClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-register" />;
}
