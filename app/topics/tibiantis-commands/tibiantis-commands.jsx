import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-commands');
}

export default function TibiantisCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-commands" />;
}
