import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-usa');
}

export default function RealeraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-usa" />;
}
