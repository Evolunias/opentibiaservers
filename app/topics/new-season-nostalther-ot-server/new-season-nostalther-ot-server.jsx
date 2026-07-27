import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-ot-server');
}

export default function NewSeasonNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-ot-server" />;
}
