import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-tibia');
}

export default function ActiveDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-tibia" />;
}
