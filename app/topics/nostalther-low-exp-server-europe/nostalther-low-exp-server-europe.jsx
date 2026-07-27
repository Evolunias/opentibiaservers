import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-europe');
}

export default function NostaltherLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-europe" />;
}
