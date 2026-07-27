import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot');
}

export default function NoResetSaintsotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot" />;
}
