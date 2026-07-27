import OtclientForumKeywordPage, { generateMetadata } from './otclient-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientForumKeywordPage />;
}
