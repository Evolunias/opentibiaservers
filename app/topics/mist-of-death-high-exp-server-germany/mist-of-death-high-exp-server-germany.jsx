import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-germany');
}

export default function MistOfDeathHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-germany" />;
}
