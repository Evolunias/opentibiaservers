import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-poland');
}

export default function ArchlightLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-poland" />;
}
