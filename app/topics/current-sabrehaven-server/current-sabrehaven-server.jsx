import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-server');
}

export default function CurrentSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-server" />;
}
