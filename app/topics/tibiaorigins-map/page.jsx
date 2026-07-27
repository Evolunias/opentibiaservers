import TibiaoriginsMapKeywordPage, { generateMetadata } from './tibiaorigins-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsMapKeywordPage />;
}
