import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-poland-server');
}

export default function OxygenotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-poland-server" />;
}
