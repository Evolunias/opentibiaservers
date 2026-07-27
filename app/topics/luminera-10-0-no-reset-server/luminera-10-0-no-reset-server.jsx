import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-no-reset-server');
}

export default function Luminera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-no-reset-server" />;
}
