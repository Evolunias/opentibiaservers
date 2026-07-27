import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-ot-server');
}

export default function ActiveCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-canob-ot-server" />;
}
