import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-argentina');
}

export default function UnlineLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-argentina" />;
}
