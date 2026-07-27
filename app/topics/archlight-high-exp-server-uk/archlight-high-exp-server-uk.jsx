import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-uk');
}

export default function ArchlightHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-uk" />;
}
