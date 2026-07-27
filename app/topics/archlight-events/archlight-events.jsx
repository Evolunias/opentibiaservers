import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-events');
}

export default function ArchlightEventsKeywordPage() {
  return <StaticKeywordPage slug="archlight-events" />;
}
