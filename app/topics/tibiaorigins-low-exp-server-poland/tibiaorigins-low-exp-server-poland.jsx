import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-poland');
}

export default function TibiaoriginsLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-poland" />;
}
