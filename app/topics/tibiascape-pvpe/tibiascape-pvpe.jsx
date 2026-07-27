import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe');
}

export default function TibiascapePvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe" />;
}
