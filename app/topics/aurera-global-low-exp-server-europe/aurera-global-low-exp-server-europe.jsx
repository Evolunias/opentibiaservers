import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-europe');
}

export default function AureraGlobalLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-europe" />;
}
