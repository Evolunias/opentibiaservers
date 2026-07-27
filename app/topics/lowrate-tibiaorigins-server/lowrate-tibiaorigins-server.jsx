import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-server');
}

export default function LowrateTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-server" />;
}
