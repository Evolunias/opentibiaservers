import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-mexico-server');
}

export default function TibiaoriginsMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-mexico-server" />;
}
