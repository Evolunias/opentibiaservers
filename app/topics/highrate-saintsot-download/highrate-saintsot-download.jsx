import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-download');
}

export default function HighrateSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-download" />;
}
