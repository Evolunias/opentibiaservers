import ActiveTibiaoriginsTibiaKeywordPage, { generateMetadata } from './active-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsTibiaKeywordPage />;
}
