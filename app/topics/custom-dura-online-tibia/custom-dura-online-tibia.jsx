import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-tibia');
}

export default function CustomDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-tibia" />;
}
