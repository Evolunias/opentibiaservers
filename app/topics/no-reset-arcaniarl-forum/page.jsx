import NoResetArcaniarlForumKeywordPage, { generateMetadata } from './no-reset-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlForumKeywordPage />;
}
