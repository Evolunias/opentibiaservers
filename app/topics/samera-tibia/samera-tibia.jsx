import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-tibia');
}

export default function SameraTibiaKeywordPage() {
  return <StaticKeywordPage slug="samera-tibia" />;
}
