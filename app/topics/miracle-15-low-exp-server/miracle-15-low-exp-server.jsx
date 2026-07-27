import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-low-exp-server');
}

export default function Miracle15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-low-exp-server" />;
}
