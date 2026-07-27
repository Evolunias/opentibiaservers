import OxygenotRetroServerGermanyKeywordPage, { generateMetadata } from './oxygenot-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerGermanyKeywordPage />;
}
