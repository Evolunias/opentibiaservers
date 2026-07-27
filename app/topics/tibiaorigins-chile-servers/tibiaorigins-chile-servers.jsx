import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-chile-servers');
}

export default function TibiaoriginsChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-chile-servers" />;
}
