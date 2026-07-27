import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-tibia');
}

export default function NewSeasonDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-tibia" />;
}
