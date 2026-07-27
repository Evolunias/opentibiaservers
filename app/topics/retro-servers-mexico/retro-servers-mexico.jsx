import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-mexico');
}

export default function RetroServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-mexico" />;
}
