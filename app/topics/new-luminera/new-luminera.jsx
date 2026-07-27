import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera');
}

export default function NewLumineraKeywordPage() {
  return <StaticKeywordPage slug="new-luminera" />;
}
