import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-client');
}

export default function NewLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-client" />;
}
