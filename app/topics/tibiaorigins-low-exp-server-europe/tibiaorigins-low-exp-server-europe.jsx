import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-europe');
}

export default function TibiaoriginsLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-europe" />;
}
