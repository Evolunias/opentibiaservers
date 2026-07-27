import TopNepreniaTibiaKeywordPage, { generateMetadata } from './top-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaTibiaKeywordPage />;
}
