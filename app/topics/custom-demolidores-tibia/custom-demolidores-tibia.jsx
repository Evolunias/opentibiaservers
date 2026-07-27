import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-tibia');
}

export default function CustomDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-tibia" />;
}
