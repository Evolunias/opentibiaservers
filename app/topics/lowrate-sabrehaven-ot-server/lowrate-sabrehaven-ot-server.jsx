import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-ot-server');
}

export default function LowrateSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-ot-server" />;
}
