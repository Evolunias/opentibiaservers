import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-europe');
}

export default function LumineraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-europe" />;
}
