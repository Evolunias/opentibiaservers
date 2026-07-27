import HighrateCarlinotForumKeywordPage, { generateMetadata } from './highrate-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotForumKeywordPage />;
}
