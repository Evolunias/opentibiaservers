import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-54-non-pvp-server');
}

export default function Sabrehaven854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-54-non-pvp-server" />;
}
