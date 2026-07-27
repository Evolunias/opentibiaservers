import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-register');
}

export default function ActiveRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-register" />;
}
