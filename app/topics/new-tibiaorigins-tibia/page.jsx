import NewTibiaoriginsTibiaKeywordPage, { generateMetadata } from './new-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsTibiaKeywordPage />;
}
