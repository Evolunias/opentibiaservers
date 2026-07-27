import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-usa');
}

export default function UnlineLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-usa" />;
}
