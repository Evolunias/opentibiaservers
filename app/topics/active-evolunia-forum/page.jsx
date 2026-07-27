import ActiveEvoluniaForumKeywordPage, { generateMetadata } from './active-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaForumKeywordPage />;
}
