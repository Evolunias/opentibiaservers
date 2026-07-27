import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-register');
}

export default function CurrentSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-register" />;
}
