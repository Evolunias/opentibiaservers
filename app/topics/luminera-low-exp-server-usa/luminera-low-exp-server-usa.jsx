import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-usa');
}

export default function LumineraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-usa" />;
}
