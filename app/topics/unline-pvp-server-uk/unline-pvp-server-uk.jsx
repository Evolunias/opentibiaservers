import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-uk');
}

export default function UnlinePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-uk" />;
}
