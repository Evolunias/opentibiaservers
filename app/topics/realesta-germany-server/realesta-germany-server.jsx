import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-germany-server');
}

export default function RealestaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-germany-server" />;
}
