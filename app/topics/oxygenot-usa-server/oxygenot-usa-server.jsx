import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-usa-server');
}

export default function OxygenotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-usa-server" />;
}
