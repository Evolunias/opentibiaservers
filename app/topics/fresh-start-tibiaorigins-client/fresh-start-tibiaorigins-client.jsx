import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-client');
}

export default function FreshStartTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-client" />;
}
