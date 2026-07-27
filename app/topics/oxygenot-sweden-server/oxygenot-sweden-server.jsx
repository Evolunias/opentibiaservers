import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-sweden-server');
}

export default function OxygenotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-sweden-server" />;
}
