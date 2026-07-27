import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-register');
}

export default function BestRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-register" />;
}
