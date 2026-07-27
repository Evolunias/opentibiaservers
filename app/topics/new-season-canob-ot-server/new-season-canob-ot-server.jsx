import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-ot-server');
}

export default function NewSeasonCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-ot-server" />;
}
