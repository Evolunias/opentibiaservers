import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-tibia');
}

export default function OfficialDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-tibia" />;
}
