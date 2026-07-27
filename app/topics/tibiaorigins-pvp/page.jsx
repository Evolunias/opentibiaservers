import TibiaoriginsPvpKeywordPage, { generateMetadata } from './tibiaorigins-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsPvpKeywordPage />;
}
