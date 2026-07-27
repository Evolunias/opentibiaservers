import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-register');
}

export default function OfficialClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-register" />;
}
