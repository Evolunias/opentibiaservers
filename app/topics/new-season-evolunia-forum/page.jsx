import NewSeasonEvoluniaForumKeywordPage, { generateMetadata } from './new-season-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaForumKeywordPage />;
}
