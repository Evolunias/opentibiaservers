import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-argentina');
}

export default function TibiaoriginsFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-argentina" />;
}
