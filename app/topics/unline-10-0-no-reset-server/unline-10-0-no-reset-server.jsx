import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-no-reset-server');
}

export default function Unline100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-no-reset-server" />;
}
