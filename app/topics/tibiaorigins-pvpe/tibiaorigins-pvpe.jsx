import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe');
}

export default function TibiaoriginsPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe" />;
}
