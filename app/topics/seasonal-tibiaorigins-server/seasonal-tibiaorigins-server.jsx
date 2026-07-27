import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiaorigins-server');
}

export default function SeasonalTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiaorigins-server" />;
}
