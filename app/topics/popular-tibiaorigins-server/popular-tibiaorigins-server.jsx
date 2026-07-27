import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-server');
}

export default function PopularTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-server" />;
}
