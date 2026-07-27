import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-ot-server');
}

export default function PopularTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-ot-server" />;
}
