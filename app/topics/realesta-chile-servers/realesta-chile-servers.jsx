import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-chile-servers');
}

export default function RealestaChileServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-chile-servers" />;
}
