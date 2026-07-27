import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fun-server');
}

export default function RealestaFunServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-fun-server" />;
}
