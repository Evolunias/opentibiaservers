import TibiaoriginsBossesKeywordPage, { generateMetadata } from './tibiaorigins-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsBossesKeywordPage />;
}
