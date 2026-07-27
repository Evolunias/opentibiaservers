import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-fun-server');
}

export default function MiracleFunServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-fun-server" />;
}
