import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-server');
}

export default function NewSeasonImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-server" />;
}
