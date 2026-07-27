import OxygenotRetroServerEuropeKeywordPage, { generateMetadata } from './oxygenot-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerEuropeKeywordPage />;
}
