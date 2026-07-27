import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-no-reset-server');
}

export default function Originaltibia80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-no-reset-server" />;
}
