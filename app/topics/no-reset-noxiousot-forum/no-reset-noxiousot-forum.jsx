import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-forum');
}

export default function NoResetNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-forum" />;
}
