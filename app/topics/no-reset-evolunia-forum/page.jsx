import NoResetEvoluniaForumKeywordPage, { generateMetadata } from './no-reset-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaForumKeywordPage />;
}
