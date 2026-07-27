import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-poland');
}

export default function NostaltherHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-poland" />;
}
