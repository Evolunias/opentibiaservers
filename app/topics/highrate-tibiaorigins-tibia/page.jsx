import HighrateTibiaoriginsTibiaKeywordPage, { generateMetadata } from './highrate-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaoriginsTibiaKeywordPage />;
}
