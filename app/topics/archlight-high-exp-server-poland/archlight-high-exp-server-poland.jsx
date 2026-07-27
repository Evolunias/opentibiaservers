import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-poland');
}

export default function ArchlightHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-poland" />;
}
