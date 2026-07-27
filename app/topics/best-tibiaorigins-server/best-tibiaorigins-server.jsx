import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-server');
}

export default function BestTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-server" />;
}
