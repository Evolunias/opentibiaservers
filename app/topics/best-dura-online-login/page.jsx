import BestDuraOnlineLoginKeywordPage, { generateMetadata } from './best-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDuraOnlineLoginKeywordPage />;
}
