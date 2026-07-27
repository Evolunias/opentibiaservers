import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-server');
}

export default function CustomThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-server" />;
}
