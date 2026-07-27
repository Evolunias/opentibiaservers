import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-ot-server');
}

export default function TopCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-canob-ot-server" />;
}
