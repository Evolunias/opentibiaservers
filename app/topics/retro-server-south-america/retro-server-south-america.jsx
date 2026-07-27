import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-south-america');
}

export default function RetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-south-america" />;
}
