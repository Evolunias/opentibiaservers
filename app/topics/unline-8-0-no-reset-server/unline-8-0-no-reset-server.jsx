import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-no-reset-server');
}

export default function Unline80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-no-reset-server" />;
}
