import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-tibia');
}

export default function PytheraTibiaKeywordPage() {
  return <StaticKeywordPage slug="pythera-tibia" />;
}
