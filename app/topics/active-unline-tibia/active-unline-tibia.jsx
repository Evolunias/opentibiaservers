import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-tibia');
}

export default function ActiveUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-unline-tibia" />;
}
