import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-server');
}

export default function ActiveThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-server" />;
}
