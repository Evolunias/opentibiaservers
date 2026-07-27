import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-brazil');
}

export default function RetroServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-brazil" />;
}
