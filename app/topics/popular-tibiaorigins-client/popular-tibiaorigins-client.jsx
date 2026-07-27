import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-client');
}

export default function PopularTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-client" />;
}
