import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-usa');
}

export default function TibiaoriginsRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-usa" />;
}
