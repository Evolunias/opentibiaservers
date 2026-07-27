import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-ot-server');
}

export default function TopThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-ot-server" />;
}
