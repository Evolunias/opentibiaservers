import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-register');
}

export default function TopCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-register" />;
}
