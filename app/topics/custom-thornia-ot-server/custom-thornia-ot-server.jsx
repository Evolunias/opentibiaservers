import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-ot-server');
}

export default function CustomThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-ot-server" />;
}
