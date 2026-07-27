import NewTibiaretroOtKeywordPage, { generateMetadata } from './new-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroOtKeywordPage />;
}
