import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-client');
}

export default function TopTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-client" />;
}
