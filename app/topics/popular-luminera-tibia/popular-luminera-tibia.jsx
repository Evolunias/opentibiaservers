import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-tibia');
}

export default function PopularLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-tibia" />;
}
