import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-ot-server');
}

export default function CurrentTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-ot-server" />;
}
