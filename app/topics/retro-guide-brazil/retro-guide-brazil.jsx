import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-brazil');
}

export default function RetroGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-brazil" />;
}
