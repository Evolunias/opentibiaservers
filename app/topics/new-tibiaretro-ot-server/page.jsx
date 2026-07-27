import NewTibiaretroOtServerKeywordPage, { generateMetadata } from './new-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroOtServerKeywordPage />;
}
