import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-tibia');
}

export default function NewDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-tibia" />;
}
