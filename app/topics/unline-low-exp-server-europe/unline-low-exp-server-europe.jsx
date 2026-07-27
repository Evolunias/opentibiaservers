import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-europe');
}

export default function UnlineLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-europe" />;
}
