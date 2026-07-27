import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-register');
}

export default function BestThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-register" />;
}
