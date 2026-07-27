import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-poland');
}

export default function SabrehavenNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-poland" />;
}
