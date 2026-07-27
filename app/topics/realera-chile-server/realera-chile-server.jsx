import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-chile-server');
}

export default function RealeraChileServerKeywordPage() {
  return <StaticKeywordPage slug="realera-chile-server" />;
}
