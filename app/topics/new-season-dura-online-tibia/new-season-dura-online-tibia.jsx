import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-tibia');
}

export default function NewSeasonDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-tibia" />;
}
