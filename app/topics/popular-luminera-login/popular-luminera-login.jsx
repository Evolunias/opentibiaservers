import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-login');
}

export default function PopularLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-login" />;
}
