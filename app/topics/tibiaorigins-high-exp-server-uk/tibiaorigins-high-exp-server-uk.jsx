import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-uk');
}

export default function TibiaoriginsHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-uk" />;
}
