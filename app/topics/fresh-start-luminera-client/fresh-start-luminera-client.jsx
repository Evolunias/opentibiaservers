import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-client');
}

export default function FreshStartLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-client" />;
}
