import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-europe');
}

export default function RealestaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-europe" />;
}
