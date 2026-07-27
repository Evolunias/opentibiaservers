import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-commands');
}

export default function ClassickDrakoriaCommandsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-commands" />;
}
