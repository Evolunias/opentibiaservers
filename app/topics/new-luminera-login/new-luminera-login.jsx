import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-login');
}

export default function NewLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-login" />;
}
