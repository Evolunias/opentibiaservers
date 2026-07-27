import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-usa-server');
}

export default function LumineraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-usa-server" />;
}
