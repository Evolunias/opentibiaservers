import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-commands');
}

export default function TibiaraCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-commands" />;
}
