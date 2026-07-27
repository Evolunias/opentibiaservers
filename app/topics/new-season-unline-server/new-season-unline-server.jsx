import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-server');
}

export default function NewSeasonUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-server" />;
}
