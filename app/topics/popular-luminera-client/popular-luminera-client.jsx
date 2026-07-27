import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-client');
}

export default function PopularLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-client" />;
}
