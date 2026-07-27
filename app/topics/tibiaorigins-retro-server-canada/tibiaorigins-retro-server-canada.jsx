import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-canada');
}

export default function TibiaoriginsRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-canada" />;
}
