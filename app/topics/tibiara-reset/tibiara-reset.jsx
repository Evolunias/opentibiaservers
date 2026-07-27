import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-reset');
}

export default function TibiaraResetKeywordPage() {
  return <StaticKeywordPage slug="tibiara-reset" />;
}
