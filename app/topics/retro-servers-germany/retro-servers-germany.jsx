import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-germany');
}

export default function RetroServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-germany" />;
}
