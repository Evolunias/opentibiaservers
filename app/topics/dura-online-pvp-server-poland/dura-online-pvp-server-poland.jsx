import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-poland');
}

export default function DuraOnlinePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-poland" />;
}
