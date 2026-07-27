import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-germany');
}

export default function MistOfDeathLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-germany" />;
}
