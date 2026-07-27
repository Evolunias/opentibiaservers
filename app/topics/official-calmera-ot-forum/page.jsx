import OfficialCalmeraOtForumKeywordPage, { generateMetadata } from './official-calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtForumKeywordPage />;
}
