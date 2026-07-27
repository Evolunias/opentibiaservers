import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-register');
}

export default function ThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="thaisot-register" />;
}
