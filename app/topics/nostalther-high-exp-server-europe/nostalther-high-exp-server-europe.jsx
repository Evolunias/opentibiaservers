import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-europe');
}

export default function NostaltherHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-europe" />;
}
