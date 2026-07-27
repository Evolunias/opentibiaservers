import LowrateTibiaoriginsOtKeywordPage, { generateMetadata } from './lowrate-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsOtKeywordPage />;
}
