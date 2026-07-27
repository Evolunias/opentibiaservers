import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-sweden');
}

export default function RetroGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-sweden" />;
}
