import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-tibia');
}

export default function BestElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-tibia" />;
}
