import LowrateTibiaoriginsServerKeywordPage, { generateMetadata } from './lowrate-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsServerKeywordPage />;
}
