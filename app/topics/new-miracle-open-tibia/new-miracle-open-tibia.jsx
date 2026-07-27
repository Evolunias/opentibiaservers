import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-open-tibia');
}

export default function NewMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-open-tibia" />;
}
