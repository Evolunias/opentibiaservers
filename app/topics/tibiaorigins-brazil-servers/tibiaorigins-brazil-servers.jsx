import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-brazil-servers');
}

export default function TibiaoriginsBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-brazil-servers" />;
}
