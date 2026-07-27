import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-login');
}

export default function FreshStartLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-login" />;
}
