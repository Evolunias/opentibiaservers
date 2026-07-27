import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-client');
}

export default function CurrentLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-client" />;
}
