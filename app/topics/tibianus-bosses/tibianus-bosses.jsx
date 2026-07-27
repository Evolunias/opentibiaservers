import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-bosses');
}

export default function TibianusBossesKeywordPage() {
  return <StaticKeywordPage slug="tibianus-bosses" />;
}
