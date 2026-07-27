import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-forgotten-server');
}

export default function BestForgottenServerKeywordPage() {
  return <StaticKeywordPage slug="best-forgotten-server" />;
}
