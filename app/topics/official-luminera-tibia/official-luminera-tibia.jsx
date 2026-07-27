import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-tibia');
}

export default function OfficialLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-tibia" />;
}
