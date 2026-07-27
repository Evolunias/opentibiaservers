import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-commands');
}

export default function OriginaltibiaCommandsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-commands" />;
}
