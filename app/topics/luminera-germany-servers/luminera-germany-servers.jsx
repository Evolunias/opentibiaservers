import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-germany-servers');
}

export default function LumineraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-germany-servers" />;
}
