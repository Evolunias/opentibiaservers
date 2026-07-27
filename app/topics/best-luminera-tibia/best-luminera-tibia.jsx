import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-tibia');
}

export default function BestLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-tibia" />;
}
