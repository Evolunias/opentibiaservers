import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-commands');
}

export default function ArchlightCommandsKeywordPage() {
  return <StaticKeywordPage slug="archlight-commands" />;
}
