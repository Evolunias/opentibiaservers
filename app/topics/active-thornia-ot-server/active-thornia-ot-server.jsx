import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-ot-server');
}

export default function ActiveThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-ot-server" />;
}
