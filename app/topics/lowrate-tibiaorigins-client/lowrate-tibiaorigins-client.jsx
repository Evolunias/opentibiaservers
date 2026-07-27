import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-client');
}

export default function LowrateTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-client" />;
}
