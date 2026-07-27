import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-commands');
}

export default function TibijkaCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-commands" />;
}
