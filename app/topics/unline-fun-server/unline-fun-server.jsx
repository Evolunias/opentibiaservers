import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fun-server');
}

export default function UnlineFunServerKeywordPage() {
  return <StaticKeywordPage slug="unline-fun-server" />;
}
