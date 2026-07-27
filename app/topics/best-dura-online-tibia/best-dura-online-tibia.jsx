import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-tibia');
}

export default function BestDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-tibia" />;
}
