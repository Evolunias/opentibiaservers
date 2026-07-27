import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-france');
}

export default function TibiaoriginsRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-france" />;
}
