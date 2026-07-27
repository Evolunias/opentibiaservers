import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-login');
}

export default function CustomCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-login" />;
}
