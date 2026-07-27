import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-launcher');
}

export default function TrashformersLauncherKeywordPage() {
  return <StaticKeywordPage slug="trashformers-launcher" />;
}
