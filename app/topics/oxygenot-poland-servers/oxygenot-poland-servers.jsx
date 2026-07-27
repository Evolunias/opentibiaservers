import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-poland-servers');
}

export default function OxygenotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-poland-servers" />;
}
