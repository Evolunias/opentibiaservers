import OxygenotRetroServerUkKeywordPage, { generateMetadata } from './oxygenot-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerUkKeywordPage />;
}
