import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-tibia');
}

export default function JameraTibiaKeywordPage() {
  return <StaticKeywordPage slug="jamera-tibia" />;
}
