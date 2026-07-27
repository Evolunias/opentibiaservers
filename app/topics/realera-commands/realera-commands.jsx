import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-commands');
}

export default function RealeraCommandsKeywordPage() {
  return <StaticKeywordPage slug="realera-commands" />;
}
