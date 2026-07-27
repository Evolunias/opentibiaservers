import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-ot-server');
}

export default function CurrentSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-ot-server" />;
}
