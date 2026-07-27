import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-uptime');
}

export default function TrashformersUptimeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-uptime" />;
}
