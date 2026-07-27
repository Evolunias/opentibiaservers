import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-chile-server');
}

export default function RealestaChileServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-chile-server" />;
}
