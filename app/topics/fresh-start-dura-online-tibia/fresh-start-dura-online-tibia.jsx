import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-tibia');
}

export default function FreshStartDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-tibia" />;
}
