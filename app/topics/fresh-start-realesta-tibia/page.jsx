import FreshStartRealestaTibiaKeywordPage, { generateMetadata } from './fresh-start-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaTibiaKeywordPage />;
}
