import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-tibia');
}

export default function TopLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-tibia" />;
}
