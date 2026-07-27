import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-argentina');
}

export default function TibiaoriginsPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-argentina" />;
}
