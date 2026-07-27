import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-register');
}

export default function CurrentRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-register" />;
}
