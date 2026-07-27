import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-commands');
}

export default function DuraOnlineCommandsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-commands" />;
}
