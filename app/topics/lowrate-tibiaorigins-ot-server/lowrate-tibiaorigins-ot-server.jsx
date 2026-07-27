import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-ot-server');
}

export default function LowrateTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-ot-server" />;
}
