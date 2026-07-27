import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-server');
}

export default function RefugiaServerKeywordPage() {
  return <StaticKeywordPage slug="refugia-server" />;
}
