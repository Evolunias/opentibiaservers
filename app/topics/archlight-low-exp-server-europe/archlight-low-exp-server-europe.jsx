import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-europe');
}

export default function ArchlightLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-europe" />;
}
