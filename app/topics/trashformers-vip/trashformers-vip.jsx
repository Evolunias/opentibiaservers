import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-vip');
}

export default function TrashformersVipKeywordPage() {
  return <StaticKeywordPage slug="trashformers-vip" />;
}
