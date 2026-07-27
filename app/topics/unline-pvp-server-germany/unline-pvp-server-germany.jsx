import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-germany');
}

export default function UnlinePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-germany" />;
}
