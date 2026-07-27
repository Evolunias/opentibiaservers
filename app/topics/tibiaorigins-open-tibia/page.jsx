import TibiaoriginsOpenTibiaKeywordPage, { generateMetadata } from './tibiaorigins-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsOpenTibiaKeywordPage />;
}
