import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-login');
}

export default function BestLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-login" />;
}
