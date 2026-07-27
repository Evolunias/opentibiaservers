import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fun-server');
}

export default function TibiaoriginsFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fun-server" />;
}
