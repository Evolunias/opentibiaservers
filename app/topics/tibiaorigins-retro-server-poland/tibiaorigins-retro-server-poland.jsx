import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-poland');
}

export default function TibiaoriginsRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-poland" />;
}
