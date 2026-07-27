import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-germany');
}

export default function LumineraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-germany" />;
}
