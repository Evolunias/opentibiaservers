import CustomEvoluniaForumKeywordPage, { generateMetadata } from './custom-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaForumKeywordPage />;
}
