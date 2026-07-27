import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-germany');
}

export default function DuraOnlineLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-germany" />;
}
