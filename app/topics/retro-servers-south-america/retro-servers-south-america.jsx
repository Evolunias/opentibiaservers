import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-south-america');
}

export default function RetroServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-south-america" />;
}
