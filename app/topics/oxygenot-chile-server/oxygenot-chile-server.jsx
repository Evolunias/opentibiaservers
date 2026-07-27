import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-chile-server');
}

export default function OxygenotChileServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-chile-server" />;
}
