import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera');
}

export default function CustomLumineraKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera" />;
}
