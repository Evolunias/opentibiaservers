import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-tibia');
}

export default function CustomLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-tibia" />;
}
