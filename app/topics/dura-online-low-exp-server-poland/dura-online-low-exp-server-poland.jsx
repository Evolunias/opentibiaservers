import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-poland');
}

export default function DuraOnlineLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-poland" />;
}
