import ActiveNoxiousotForumKeywordPage, { generateMetadata } from './active-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotForumKeywordPage />;
}
