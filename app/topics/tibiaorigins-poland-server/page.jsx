import TibiaoriginsPolandServerKeywordPage, { generateMetadata } from './tibiaorigins-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsPolandServerKeywordPage />;
}
