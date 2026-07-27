import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-usa-servers');
}

export default function ArchlightUsaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-usa-servers" />;
}
