import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fun-server');
}

export default function ShadowcoresFunServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fun-server" />;
}
