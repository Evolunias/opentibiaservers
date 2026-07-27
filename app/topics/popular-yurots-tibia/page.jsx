import PopularYurotsTibiaKeywordPage, { generateMetadata } from './popular-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsTibiaKeywordPage />;
}
