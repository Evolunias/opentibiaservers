import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-uk');
}

export default function TibiaoriginsRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-uk" />;
}
