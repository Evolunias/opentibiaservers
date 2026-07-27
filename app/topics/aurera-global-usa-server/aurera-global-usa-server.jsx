import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-usa-server');
}

export default function AureraGlobalUsaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-usa-server" />;
}
