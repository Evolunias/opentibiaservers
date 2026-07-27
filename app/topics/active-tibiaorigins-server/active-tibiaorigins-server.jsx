import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-server');
}

export default function ActiveTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-server" />;
}
