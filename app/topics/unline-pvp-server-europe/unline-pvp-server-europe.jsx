import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-europe');
}

export default function UnlinePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-europe" />;
}
