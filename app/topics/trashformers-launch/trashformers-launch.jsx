import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-launch');
}

export default function TrashformersLaunchKeywordPage() {
  return <StaticKeywordPage slug="trashformers-launch" />;
}
