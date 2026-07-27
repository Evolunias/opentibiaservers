import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-server');
}

export default function LowrateSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-server" />;
}
