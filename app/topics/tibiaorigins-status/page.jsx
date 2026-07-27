import TibiaoriginsStatusKeywordPage, { generateMetadata } from './tibiaorigins-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsStatusKeywordPage />;
}
