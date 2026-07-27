import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-usa-servers');
}

export default function ShadowcoresUsaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-usa-servers" />;
}
