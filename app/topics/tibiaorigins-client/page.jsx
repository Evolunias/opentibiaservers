import TibiaoriginsClientKeywordPage, { generateMetadata } from './tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsClientKeywordPage />;
}
