import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-tibia');
}

export default function TopDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-tibia" />;
}
