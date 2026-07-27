import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-argentina');
}

export default function LumineraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-argentina" />;
}
