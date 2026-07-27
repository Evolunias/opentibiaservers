import OxygenotRetroServerSwedenKeywordPage, { generateMetadata } from './oxygenot-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerSwedenKeywordPage />;
}
