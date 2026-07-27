import BlazeraRetroServerGermanyKeywordPage, { generateMetadata } from './blazera-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerGermanyKeywordPage />;
}
