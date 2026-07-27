import ActiveArcaniarlForumKeywordPage, { generateMetadata } from './active-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlForumKeywordPage />;
}
