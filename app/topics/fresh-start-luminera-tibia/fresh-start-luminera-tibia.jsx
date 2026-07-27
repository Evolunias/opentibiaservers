import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-tibia');
}

export default function FreshStartLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-tibia" />;
}
