import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-server');
}

export default function NewSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-server" />;
}
