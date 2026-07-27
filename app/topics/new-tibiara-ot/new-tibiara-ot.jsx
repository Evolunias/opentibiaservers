import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-ot');
}

export default function NewTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-ot" />;
}
