import PopularArchlightOpenTibiaKeywordPage, { generateMetadata } from './popular-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightOpenTibiaKeywordPage />;
}
