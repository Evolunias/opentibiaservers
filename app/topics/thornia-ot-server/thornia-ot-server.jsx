import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-ot-server');
}

export default function ThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-ot-server" />;
}
