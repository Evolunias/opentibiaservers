import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-north-america');
}

export default function TibiaoriginsRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-north-america" />;
}
