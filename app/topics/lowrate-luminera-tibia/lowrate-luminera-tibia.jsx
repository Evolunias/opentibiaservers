import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-tibia');
}

export default function LowrateLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-tibia" />;
}
