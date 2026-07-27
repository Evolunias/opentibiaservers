import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-open-tibia');
}

export default function CustomDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-open-tibia" />;
}
