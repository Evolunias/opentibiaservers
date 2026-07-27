import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-argentina');
}

export default function TibiaoriginsRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-argentina" />;
}
