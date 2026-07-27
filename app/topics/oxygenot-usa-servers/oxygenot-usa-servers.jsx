import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-usa-servers');
}

export default function OxygenotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-usa-servers" />;
}
