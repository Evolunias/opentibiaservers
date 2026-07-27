import NewEvoluniaForumKeywordPage, { generateMetadata } from './new-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaForumKeywordPage />;
}
