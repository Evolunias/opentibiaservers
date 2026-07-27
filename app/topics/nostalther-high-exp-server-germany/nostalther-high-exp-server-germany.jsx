import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-germany');
}

export default function NostaltherHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-germany" />;
}
