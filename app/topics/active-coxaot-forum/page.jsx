import ActiveCoxaotForumKeywordPage, { generateMetadata } from './active-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotForumKeywordPage />;
}
