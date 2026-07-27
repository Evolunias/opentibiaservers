import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-world');
}

export default function AnticaWorldKeywordPage() {
  return <StaticKeywordPage slug="antica-world" />;
}
