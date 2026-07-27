import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-europe-servers');
}

export default function LumineraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-europe-servers" />;
}
