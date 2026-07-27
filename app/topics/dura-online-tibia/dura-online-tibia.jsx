import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-tibia');
}

export default function DuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-tibia" />;
}
