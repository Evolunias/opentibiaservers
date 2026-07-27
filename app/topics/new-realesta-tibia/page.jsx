import NewRealestaTibiaKeywordPage, { generateMetadata } from './new-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaTibiaKeywordPage />;
}
