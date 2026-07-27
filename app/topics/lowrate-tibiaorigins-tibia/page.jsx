import LowrateTibiaoriginsTibiaKeywordPage, { generateMetadata } from './lowrate-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsTibiaKeywordPage />;
}
