import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-login');
}

export default function TopLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-login" />;
}
