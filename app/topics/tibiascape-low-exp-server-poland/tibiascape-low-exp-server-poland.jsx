import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-poland');
}

export default function TibiascapeLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-poland" />;
}
