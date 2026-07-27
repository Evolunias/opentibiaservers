import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-tibia');
}

export default function ActiveNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-tibia" />;
}
