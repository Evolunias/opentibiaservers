import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-germany');
}

export default function TibiaoriginsRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-germany" />;
}
