import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-server');
}

export default function CurrentTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-server" />;
}
