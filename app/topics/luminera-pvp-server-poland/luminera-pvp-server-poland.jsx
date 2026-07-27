import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-poland');
}

export default function LumineraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-poland" />;
}
