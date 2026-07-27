import CurrentEvoluniaForumKeywordPage, { generateMetadata } from './current-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaForumKeywordPage />;
}
