import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-europe');
}

export default function UnlineNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-europe" />;
}
