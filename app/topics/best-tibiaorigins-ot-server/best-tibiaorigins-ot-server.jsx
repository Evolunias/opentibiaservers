import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-ot-server');
}

export default function BestTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-ot-server" />;
}
