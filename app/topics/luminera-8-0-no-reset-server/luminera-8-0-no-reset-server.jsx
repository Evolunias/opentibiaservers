import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-no-reset-server');
}

export default function Luminera80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-no-reset-server" />;
}
