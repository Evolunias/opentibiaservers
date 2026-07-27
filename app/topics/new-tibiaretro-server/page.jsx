import NewTibiaretroServerKeywordPage, { generateMetadata } from './new-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroServerKeywordPage />;
}
