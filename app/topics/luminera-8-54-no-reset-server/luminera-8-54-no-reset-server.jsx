import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-no-reset-server');
}

export default function Luminera854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-no-reset-server" />;
}
