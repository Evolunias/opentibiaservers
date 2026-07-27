import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-commands');
}

export default function TibianusCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-commands" />;
}
