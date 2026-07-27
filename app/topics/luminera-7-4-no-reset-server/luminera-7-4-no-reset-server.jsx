import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-no-reset-server');
}

export default function Luminera74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-no-reset-server" />;
}
