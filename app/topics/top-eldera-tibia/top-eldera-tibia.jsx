import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-tibia');
}

export default function TopElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-tibia" />;
}
