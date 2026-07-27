import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-forum');
}

export default function HighrateCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-forum" />;
}
