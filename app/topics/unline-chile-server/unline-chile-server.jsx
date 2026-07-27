import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-chile-server');
}

export default function UnlineChileServerKeywordPage() {
  return <StaticKeywordPage slug="unline-chile-server" />;
}
