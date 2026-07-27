import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-europe');
}

export default function TibiaoriginsHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-europe" />;
}
