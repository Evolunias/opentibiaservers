import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-mexico');
}

export default function TibiaoriginsRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-mexico" />;
}
