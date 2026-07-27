import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-poland-servers');
}

export default function ShadowcoresPolandServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-poland-servers" />;
}
