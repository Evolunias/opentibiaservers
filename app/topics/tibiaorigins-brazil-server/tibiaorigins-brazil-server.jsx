import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-brazil-server');
}

export default function TibiaoriginsBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-brazil-server" />;
}
