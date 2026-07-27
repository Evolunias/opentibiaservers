import ActiveCarlinotForumKeywordPage, { generateMetadata } from './active-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotForumKeywordPage />;
}
