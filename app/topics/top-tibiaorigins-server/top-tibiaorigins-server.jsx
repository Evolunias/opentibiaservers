import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-server');
}

export default function TopTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-server" />;
}
