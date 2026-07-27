import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-server');
}

export default function GuardiaServerKeywordPage() {
  return <StaticKeywordPage slug="guardia-server" />;
}
