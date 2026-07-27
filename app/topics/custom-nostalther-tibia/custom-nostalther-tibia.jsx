import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-tibia');
}

export default function CustomNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-tibia" />;
}
