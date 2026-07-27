import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-tibia');
}

export default function CustomUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-tibia" />;
}
