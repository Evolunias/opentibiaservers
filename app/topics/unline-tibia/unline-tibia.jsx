import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-tibia');
}

export default function UnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="unline-tibia" />;
}
