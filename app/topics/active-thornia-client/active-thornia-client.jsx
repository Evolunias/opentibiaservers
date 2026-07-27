import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-client');
}

export default function ActiveThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-client" />;
}
