import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-poland');
}

export default function ArchlightNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-poland" />;
}
