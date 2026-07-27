import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-mexico-servers');
}

export default function TibiaoriginsMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-mexico-servers" />;
}
