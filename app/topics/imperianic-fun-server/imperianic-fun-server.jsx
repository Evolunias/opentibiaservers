import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fun-server');
}

export default function ImperianicFunServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fun-server" />;
}
