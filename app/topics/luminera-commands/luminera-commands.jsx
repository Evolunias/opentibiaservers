import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-commands');
}

export default function LumineraCommandsKeywordPage() {
  return <StaticKeywordPage slug="luminera-commands" />;
}
