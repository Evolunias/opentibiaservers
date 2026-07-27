import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe');
}

export default function SerenityPvpeKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe" />;
}
