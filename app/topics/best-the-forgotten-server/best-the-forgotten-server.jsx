import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-the-forgotten-server');
}

export default function BestTheForgottenServerKeywordPage() {
  return <StaticKeywordPage slug="best-the-forgotten-server" />;
}
