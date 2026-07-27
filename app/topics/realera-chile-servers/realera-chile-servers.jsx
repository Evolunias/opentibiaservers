import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-chile-servers');
}

export default function RealeraChileServersKeywordPage() {
  return <StaticKeywordPage slug="realera-chile-servers" />;
}
