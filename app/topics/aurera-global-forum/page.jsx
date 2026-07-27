import AureraGlobalForumKeywordPage, { generateMetadata } from './aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalForumKeywordPage />;
}
