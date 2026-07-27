import ActiveHarmoniaOtForumKeywordPage, { generateMetadata } from './active-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtForumKeywordPage />;
}
