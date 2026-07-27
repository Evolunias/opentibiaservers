import PopularDuraOnlineClientKeywordPage, { generateMetadata } from './popular-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDuraOnlineClientKeywordPage />;
}
