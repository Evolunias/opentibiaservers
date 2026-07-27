import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-usa-servers');
}

export default function LumineraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-usa-servers" />;
}
