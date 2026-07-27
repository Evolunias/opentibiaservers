import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-ot-server');
}

export default function CanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="canob-ot-server" />;
}
