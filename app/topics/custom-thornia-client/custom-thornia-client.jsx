import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-client');
}

export default function CustomThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-client" />;
}
