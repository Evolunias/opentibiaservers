import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-canada');
}

export default function LumineraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-canada" />;
}
