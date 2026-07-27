import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara');
}

export default function NewTibiaraKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara" />;
}
