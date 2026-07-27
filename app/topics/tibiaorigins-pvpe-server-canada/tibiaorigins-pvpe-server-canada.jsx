import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-canada');
}

export default function TibiaoriginsPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-canada" />;
}
