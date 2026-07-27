import CurrentHarmoniaOtForumKeywordPage, { generateMetadata } from './current-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtForumKeywordPage />;
}
