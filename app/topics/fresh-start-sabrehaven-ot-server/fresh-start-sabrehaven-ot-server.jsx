import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-ot-server');
}

export default function FreshStartSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-ot-server" />;
}
