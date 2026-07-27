import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-open-tibia');
}

export default function NewSeasonDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-open-tibia" />;
}
