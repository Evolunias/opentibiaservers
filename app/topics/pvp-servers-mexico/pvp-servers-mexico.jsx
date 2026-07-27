import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-mexico');
}

export default function PvpServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-mexico" />;
}
