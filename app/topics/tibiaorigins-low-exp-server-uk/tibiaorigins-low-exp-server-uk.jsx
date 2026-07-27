import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-uk');
}

export default function TibiaoriginsLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-uk" />;
}
