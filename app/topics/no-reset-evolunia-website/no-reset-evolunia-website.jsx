import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-website');
}

export default function NoResetEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-website" />;
}
