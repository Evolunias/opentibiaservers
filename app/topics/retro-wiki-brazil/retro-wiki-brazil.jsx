import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-brazil');
}

export default function RetroWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-brazil" />;
}
