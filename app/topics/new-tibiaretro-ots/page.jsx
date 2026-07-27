import NewTibiaretroOtsKeywordPage, { generateMetadata } from './new-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroOtsKeywordPage />;
}
