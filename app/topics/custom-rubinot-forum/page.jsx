import CustomRubinotForumKeywordPage, { generateMetadata } from './custom-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotForumKeywordPage />;
}
