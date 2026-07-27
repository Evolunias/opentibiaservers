import NewAlasteraTibiaKeywordPage, { generateMetadata } from './new-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraTibiaKeywordPage />;
}
