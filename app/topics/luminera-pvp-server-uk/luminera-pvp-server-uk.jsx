import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-uk');
}

export default function LumineraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-uk" />;
}
