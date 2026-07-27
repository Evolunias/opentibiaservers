import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-client');
}

export default function CurrentTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-client" />;
}
