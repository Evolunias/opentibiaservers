import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-poland');
}

export default function TibiaoriginsHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-poland" />;
}
