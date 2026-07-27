import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-tibia');
}

export default function NewLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-tibia" />;
}
