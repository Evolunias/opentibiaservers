import OxygenotRetroServerBrazilKeywordPage, { generateMetadata } from './oxygenot-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerBrazilKeywordPage />;
}
