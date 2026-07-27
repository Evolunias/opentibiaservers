import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-client');
}

export default function TopLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-client" />;
}
