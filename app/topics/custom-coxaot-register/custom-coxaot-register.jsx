import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-register');
}

export default function CustomCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-register" />;
}
