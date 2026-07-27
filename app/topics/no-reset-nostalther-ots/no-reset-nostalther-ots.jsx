import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-ots');
}

export default function NoResetNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-ots" />;
}
