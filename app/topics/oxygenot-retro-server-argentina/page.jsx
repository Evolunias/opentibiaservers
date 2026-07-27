import OxygenotRetroServerArgentinaKeywordPage, { generateMetadata } from './oxygenot-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerArgentinaKeywordPage />;
}
