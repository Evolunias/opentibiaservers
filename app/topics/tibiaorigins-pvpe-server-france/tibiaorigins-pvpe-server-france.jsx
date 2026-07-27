import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-france');
}

export default function TibiaoriginsPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-france" />;
}
