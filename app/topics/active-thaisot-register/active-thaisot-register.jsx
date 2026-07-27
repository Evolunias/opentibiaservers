import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-register');
}

export default function ActiveThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-register" />;
}
