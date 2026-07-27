import CustomAureraGlobalForumKeywordPage, { generateMetadata } from './custom-aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalForumKeywordPage />;
}
