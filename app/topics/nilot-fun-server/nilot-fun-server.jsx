import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fun-server');
}

export default function NilotFunServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-fun-server" />;
}
