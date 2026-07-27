import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-server');
}

export default function OxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-server" />;
}
