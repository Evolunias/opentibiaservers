import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-ot-server');
}

export default function NewSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-ot-server" />;
}
