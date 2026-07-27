import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp');
}

export default function LumineraPvpKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp" />;
}
