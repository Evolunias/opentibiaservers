import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-ot-server');
}

export default function NoResetNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-ot-server" />;
}
