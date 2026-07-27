import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-tibia');
}

export default function PopularDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-tibia" />;
}
