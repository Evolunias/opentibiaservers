import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiaorigins-server');
}

export default function BaiakTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiaorigins-server" />;
}
