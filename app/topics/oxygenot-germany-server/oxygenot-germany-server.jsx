import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-germany-server');
}

export default function OxygenotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-germany-server" />;
}
