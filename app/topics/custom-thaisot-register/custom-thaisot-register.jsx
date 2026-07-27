import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-register');
}

export default function CustomThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-register" />;
}
