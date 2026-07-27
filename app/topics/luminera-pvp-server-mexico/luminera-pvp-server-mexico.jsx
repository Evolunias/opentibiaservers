import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-mexico');
}

export default function LumineraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-mexico" />;
}
