import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe');
}

export default function MistOfDeathPvpeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe" />;
}
