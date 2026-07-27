import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-europe');
}

export default function TibiaoriginsRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-europe" />;
}
