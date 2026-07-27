import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-poland');
}

export default function UnlinePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-poland" />;
}
