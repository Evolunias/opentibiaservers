import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-commands');
}

export default function SaintsotCommandsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-commands" />;
}
