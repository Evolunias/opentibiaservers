import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-client');
}

export default function BestLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-client" />;
}
