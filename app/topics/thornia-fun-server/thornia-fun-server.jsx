import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fun-server');
}

export default function ThorniaFunServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-fun-server" />;
}
