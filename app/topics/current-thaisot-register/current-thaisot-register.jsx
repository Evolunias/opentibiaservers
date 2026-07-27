import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-register');
}

export default function CurrentThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-register" />;
}
