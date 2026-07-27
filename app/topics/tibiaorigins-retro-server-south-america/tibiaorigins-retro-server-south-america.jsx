import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-south-america');
}

export default function TibiaoriginsRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-south-america" />;
}
