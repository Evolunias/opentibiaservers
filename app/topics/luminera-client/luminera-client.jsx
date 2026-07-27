import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-client');
}

export default function LumineraClientKeywordPage() {
  return <StaticKeywordPage slug="luminera-client" />;
}
