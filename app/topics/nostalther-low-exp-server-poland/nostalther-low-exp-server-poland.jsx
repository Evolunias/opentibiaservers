import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-poland');
}

export default function NostaltherLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-poland" />;
}
