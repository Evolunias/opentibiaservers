import LowrateCarlinotForumKeywordPage, { generateMetadata } from './lowrate-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotForumKeywordPage />;
}
