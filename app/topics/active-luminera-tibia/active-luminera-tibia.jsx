import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-tibia');
}

export default function ActiveLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-tibia" />;
}
