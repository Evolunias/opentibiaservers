import PopularArchlightTibiaKeywordPage, { generateMetadata } from './popular-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightTibiaKeywordPage />;
}
