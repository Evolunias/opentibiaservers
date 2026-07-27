import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-europe');
}

export default function LumineraLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-europe" />;
}
