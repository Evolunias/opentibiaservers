import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-tibia');
}

export default function CurrentElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-tibia" />;
}
