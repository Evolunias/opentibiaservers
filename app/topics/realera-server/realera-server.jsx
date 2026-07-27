import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-server');
}

export default function RealeraServerKeywordPage() {
  return <StaticKeywordPage slug="realera-server" />;
}
