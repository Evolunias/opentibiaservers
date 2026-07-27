import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-mexico');
}

export default function UnlineHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-mexico" />;
}
