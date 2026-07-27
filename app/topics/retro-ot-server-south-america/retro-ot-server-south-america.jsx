import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-south-america');
}

export default function RetroOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-south-america" />;
}
