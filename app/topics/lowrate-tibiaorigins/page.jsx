import LowrateTibiaoriginsKeywordPage, { generateMetadata } from './lowrate-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsKeywordPage />;
}
