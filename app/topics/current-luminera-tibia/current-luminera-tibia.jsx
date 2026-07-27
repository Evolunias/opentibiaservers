import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-tibia');
}

export default function CurrentLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-tibia" />;
}
