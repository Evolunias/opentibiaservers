import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-tibia');
}

export default function LumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="luminera-tibia" />;
}
