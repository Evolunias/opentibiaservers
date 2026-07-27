import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-private-server');
}

export default function PopularTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-private-server" />;
}
