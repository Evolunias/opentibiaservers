import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-login');
}

export default function LowrateLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-login" />;
}
