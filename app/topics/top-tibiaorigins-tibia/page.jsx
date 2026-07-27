import TopTibiaoriginsTibiaKeywordPage, { generateMetadata } from './top-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsTibiaKeywordPage />;
}
