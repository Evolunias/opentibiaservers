import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-chile-server');
}

export default function AureraGlobalChileServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-chile-server" />;
}
