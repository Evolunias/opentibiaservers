import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-ot-server');
}

export default function CustomCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-ot-server" />;
}
