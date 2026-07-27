import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-germany');
}

export default function NostaltherLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-germany" />;
}
