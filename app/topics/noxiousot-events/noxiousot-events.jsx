import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-events');
}

export default function NoxiousotEventsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-events" />;
}
