import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-canada-servers');
}

export default function LumineraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-canada-servers" />;
}
