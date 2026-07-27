import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-register');
}

export default function CustomUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-register" />;
}
