import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-germany');
}

export default function TibiascapeLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-germany" />;
}
