import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-register');
}

export default function TopRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-register" />;
}
