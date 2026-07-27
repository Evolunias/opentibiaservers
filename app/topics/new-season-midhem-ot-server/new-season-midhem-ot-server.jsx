import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-ot-server');
}

export default function NewSeasonMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-ot-server" />;
}
