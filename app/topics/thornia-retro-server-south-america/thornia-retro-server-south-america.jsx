import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-south-america');
}

export default function ThorniaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-south-america" />;
}
