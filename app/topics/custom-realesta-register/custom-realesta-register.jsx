import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-register');
}

export default function CustomRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-register" />;
}
