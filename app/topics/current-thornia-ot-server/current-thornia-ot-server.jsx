import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-ot-server');
}

export default function CurrentThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-ot-server" />;
}
