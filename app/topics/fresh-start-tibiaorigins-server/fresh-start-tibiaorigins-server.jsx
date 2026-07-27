import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-server');
}

export default function FreshStartTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-server" />;
}
