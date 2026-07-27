import FreshStartEvoluniaForumKeywordPage, { generateMetadata } from './fresh-start-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaForumKeywordPage />;
}
