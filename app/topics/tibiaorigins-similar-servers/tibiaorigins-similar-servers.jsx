import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-similar-servers');
}

export default function TibiaoriginsSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-similar-servers" />;
}
