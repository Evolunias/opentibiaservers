import ActiveTibiantisForumKeywordPage, { generateMetadata } from './active-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisForumKeywordPage />;
}
