import CustomHarmoniaOtForumKeywordPage, { generateMetadata } from './custom-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtForumKeywordPage />;
}
