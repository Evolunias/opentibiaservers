import PopularEvoluniaForumKeywordPage, { generateMetadata } from './popular-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaForumKeywordPage />;
}
