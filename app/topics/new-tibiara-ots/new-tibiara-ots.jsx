import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-ots');
}

export default function NewTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-ots" />;
}
