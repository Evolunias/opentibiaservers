import HarmoniaOtForumKeywordPage, { generateMetadata } from './harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtForumKeywordPage />;
}
