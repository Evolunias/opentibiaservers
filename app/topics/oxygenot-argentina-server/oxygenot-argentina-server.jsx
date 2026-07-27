import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-argentina-server');
}

export default function OxygenotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-argentina-server" />;
}
