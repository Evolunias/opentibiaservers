import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-chile-servers');
}

export default function OxygenotChileServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-chile-servers" />;
}
