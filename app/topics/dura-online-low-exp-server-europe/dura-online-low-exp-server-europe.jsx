import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-europe');
}

export default function DuraOnlineLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-europe" />;
}
