import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-argentina');
}

export default function RealestaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-argentina" />;
}
