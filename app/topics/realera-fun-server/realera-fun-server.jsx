import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fun-server');
}

export default function RealeraFunServerKeywordPage() {
  return <StaticKeywordPage slug="realera-fun-server" />;
}
